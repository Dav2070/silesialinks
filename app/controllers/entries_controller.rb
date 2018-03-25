class EntriesController < ApplicationController
	before_action :authenticate_user!, only: [:new, :create]
	
	def index
		@entries = Array.new
		@all_entries = Entry.all.order("date ASC")
        
		# Get the newest entry
		current_month = Time.now.month
		current_day = Time.now.day
        
		# Create an array of each months from the current reversed
		months = Array.new
		(1..12).to_a.each do |m|
			if current_month+m > 12
				months.push(current_month+m - 12)
			else
				months.push(current_month+m)
			end
		end
		months.reverse!
		months.push(current_month)
        
		current_month_first_part_added = false
		# Iterate each month
		months.each do |m|
			# Get all entries of the month
			entries = Array.new
			@all_entries.each do |e|
				if e.date.month == m
					entries.push(e)
				end
			end
         
			entries.sort_by!{ |e| e.date.day }.reverse!
         
			if current_month == m && !current_month_first_part_added
				# Add the first part of the current month
				entries.each do |e|
					if e.date.day <= current_day
						@entries.push(e)
					end
				end
				current_month_first_part_added = true
			elsif current_month == m && current_month_first_part_added
				# Add the second part of the current month
				entries.each do |e|
					if e.date.day > current_day
						@entries.push(e)
					end
				end
			else
				entries.each { |e| @entries.push(e) }
			end
		end
		
		@entries = @entries.paginate(page: params[:page], per_page: 10)
	end
	
	def new
		@entry = Entry.new
	end
   
	def create
		@entry = Entry.new(entry_params)
		@entry.user_id = current_user
		
		if @entry.save
			flash[:success] = "Eintrag wurde gespeichert."
			redirect_to entries_path
		else
			flash[:danger] = "Es gab einen Fehler beim Speichern!"
			render :new
		end
	end
	
	def show
		@entry = Entry.find(params[:id])
	end
	
	def edit
		@entry = Entry.find(params[:id])
	end
   
	def update
		@entry = Entry.find(params[:id])
      
		if @entry.update(entry_params)
			flash[:success] = "Eintrag wurde gespeichert!"
			redirect_to entry_path(@entry)
		else
         render 'edit'
      end
   end
   
   def destroy
    	@entry = Entry.find(params[:entry_id])
      @entry.destroy
      flash[:success] = "Eintrag wurde gelöscht."
      redirect_to entries_path
   end
    
   def feed
      @entries = get_entries_of_today
        
   	respond_to do |format|
         format.rss { render :layout => false }
      end
   end
    
   private
   def entry_params
		params.require(:entry).permit(:title, :text, :date)
   end
end
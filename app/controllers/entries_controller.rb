class EntriesController < ApplicationController
    before_action :authenticate_user!, only: [:new, :create]
    
    def index
        @entries = Entry.paginate(page: params[:page], per_page: 10).order('created_at DESC')
    end
    
    def new
        @entry = Entry.new
    end
    
    def create
        @entry = Entry.new(entry_params)
        @entry.user_id = current_user
        
        if @entry.save
            flash[:success] = "Eintrag erfolgreich gespeichert."
            redirect_to root_path
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
          flash[:success] = "Eintrag wurde erfolgreich gespeichert!"
          redirect_to entry_path(@entry)
        else
          render 'edit'
        end
    end
    
    def destroy
        @entry = Entry.find(params[:entry_id])
        @entry.destroy
        flash[:success] = "Eintrag wurde gelöscht."
        redirect_to root_path
    end
    
    private
    def entry_params
        params.require(:entry).permit(:title, :text, :date)
    end
end
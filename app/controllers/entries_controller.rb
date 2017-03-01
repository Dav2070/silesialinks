class EntriesController < ApplicationController
    before_action :require_user, only: [:new, :create]
    
    def index
        @entries = Entry.all
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
    
    private
    def entry_params
        params.require(:entry).permit(:title, :text, :date)
    end
end
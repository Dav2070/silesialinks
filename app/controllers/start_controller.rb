class StartController < ApplicationController
   
   def index
      @entries = Array.new
      @index_page = true
      
      @entries = get_entries_of_today
      @entries = @entries.paginate(page: params[:page], per_page: 10)
   end

   def impressum
      
   end
end
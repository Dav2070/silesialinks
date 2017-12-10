class StartController < ApplicationController
   
   def index
      @entries = Array.new
      @index_page = true
      
      @entries = get_entries_of_today
   end
end
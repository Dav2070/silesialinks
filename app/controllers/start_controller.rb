class StartController < ApplicationController
   
   def index
      @entries = Array.new
      
      @all_entries = Entry.all.reverse
      @entries = Array.new
      @all_entries.each do |entry|
         if (entry.date.day == Date.today.day) and (entry.date.month == Date.today.month)
            @entries.push entry
         end
      end
   end
end
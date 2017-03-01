class StartController < ApplicationController
   
   def index
      @entries = Entry.all
   end
end
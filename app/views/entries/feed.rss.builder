#encoding: UTF-8

xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
   xml.channel do
      xml.title "Silesialinks"
      xml.author "Silinger"
      xml.description "Tägliche Jahrestage von schlesischen Persönlichkeiten und Ereignissen"
      xml.link "https://silesialinks.com"
      xml.language "de"
      
      for entry in @entries
         xml.item do
            
            if entry.title
               title = entry.title
            else
               title = ""
            end
            title += " (#{I18n.l entry.date, :format => :long})"
            
            xml.title title
            xml.author "Silinger"
            xml.link "https://silesialinks.com/entries/#{entry.id}"
            xml.description entry.text
         end
      end
   end
end
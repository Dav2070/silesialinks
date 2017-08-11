module ApplicationHelper

   def html_truncate(html, options={})
      # Does NOT behave identical to current Rails truncate method 
      # you must pass options as a hash not just values
      # Sample usage: <%= html_truncate(category.description, :length => 
      # 120, :omission => "(continued...)" ) -%>...
      # http://techism.com/how-to-truncate-html-with-ruby-on-rails/
      
      text, result = [], []
      # get all text (including punctuation) and tags and stick them in a hash
      html.scan(/<\/?[^>]*>|[A-Za-z0-9.,\/&#;\!\+\(\)\-"'?]+/).each { |t| text << t }
      text.each do |str|
         if options[:length] > 0
            if str =~ /<\/?[^>]*>/
               previous_tag = str
               result << str
            else
               result << str
               options[:length] -= str.length
            end
         else
            # now stick the next tag with a  that matches the previous 
            # open tag on the end of the result
            if previous_tag && str =~ /<\/([#{previous_tag}]*)>/
               result << str
            end
         end
      end
      return result.join(" ") + options[:omission].to_s
   end
end
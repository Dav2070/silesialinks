class CreateEntry < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.text :text
      t.date :date
      t.integer :user_id
      t.timestamps
    end
  end
end

class CreateSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.integer :user_id
      t.string :name
      t.boolean :checked, default: false
      t.boolean :lost, default: false
      
      t.timestamps
    end
  end
end

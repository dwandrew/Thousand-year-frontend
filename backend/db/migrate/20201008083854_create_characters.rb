class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.integer :immortal_id
      t.boolean :dead
      t.boolean :immortal
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

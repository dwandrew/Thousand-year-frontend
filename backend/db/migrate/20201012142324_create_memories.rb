class CreateMemories < ActiveRecord::Migration[6.0]
  def change
    create_table :memories do |t|
      t.integer :immortal_id
      t.boolean :in_diary
      t.boolean :lost

      t.timestamps
    end
  end
end

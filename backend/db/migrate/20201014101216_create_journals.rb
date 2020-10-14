class CreateJournals < ActiveRecord::Migration[6.0]
  def change
    create_table :journals do |t|
      t.integer :immortal_id
      t.string :entry
      t.boolean :published

      t.timestamps
    end
  end
end

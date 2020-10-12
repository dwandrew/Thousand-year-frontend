class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.integer :memory_id
      t.string :description
      t.string :prompt

      t.timestamps
    end
  end
end

class CreateResources < ActiveRecord::Migration[6.0]
  def change
    create_table :resources do |t|
      t.string :name
      t.string :description
      t.boolean :stationary
      t.boolean :lost

      t.timestamps
    end
  end
end

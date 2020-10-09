class AddImmortalIdToResources < ActiveRecord::Migration[6.0]
  def change
    add_column :resources, :immortal_id, :integer
  end
end

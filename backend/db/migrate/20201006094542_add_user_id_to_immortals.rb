class AddUserIdToImmortals < ActiveRecord::Migration[6.0]
  def change
    add_column :immortals, :user_id, :integer
  end
end

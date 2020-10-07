class ChangeUserIdToImmortalId < ActiveRecord::Migration[6.0]
  def change
    rename_column :skills, :user_id, :immortal_id
  end
end

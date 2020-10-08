class ChangeImmortalToIsImmortal < ActiveRecord::Migration[6.0]
  def change
    rename_column :characters, :immortal, :is_immortal
  end
end

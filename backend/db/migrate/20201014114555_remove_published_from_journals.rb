class RemovePublishedFromJournals < ActiveRecord::Migration[6.0]
  def change
    remove_column :journals, :published
  end
end

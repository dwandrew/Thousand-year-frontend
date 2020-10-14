class AddPublishJournalToImmortal < ActiveRecord::Migration[6.0]
  def change
    add_column :immortals, :publish_journal, :boolean, default: false
  end
end

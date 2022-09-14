class AddColumnToUsers2 < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string, default: "Anonymous"

  end
end

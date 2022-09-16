class Changecolumn < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :topic, :string, default: "Other"
  end
end

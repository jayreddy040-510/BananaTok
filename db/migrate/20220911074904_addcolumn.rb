class Addcolumn < ActiveRecord::Migration[7.0]
  def change
    add_column :bananas, :on, :boolean, default: true
  end
end

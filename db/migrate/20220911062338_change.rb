class Change < ActiveRecord::Migration[7.0]
  def change
    change_column :bananas, :bananable_type, :string, default: "Post"
  end
end

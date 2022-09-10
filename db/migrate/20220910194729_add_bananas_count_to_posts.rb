class AddBananasCountToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :banana_count, :bigint, default: 0
    add_column :posts, :comment_count, :bigint, default: 0
  end
end

json.user do
  json.extract! @user, :id, :email, :username, :verified, :created_at, :updated_at
end
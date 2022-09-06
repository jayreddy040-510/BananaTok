class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]

  def show
    if current_user
      @user = current_user
    else  
      @user = nil
    end

    render json: { user: @user}
  end

  def create
    @user = User.find_by_credentials(params[:username], params[:password])

    if @user
      login!(@user)
      render json: {user: @user}
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end

  end

  def destroy
    @user = current_user
    logout!
    render json: { message: 'success' }
  end

end

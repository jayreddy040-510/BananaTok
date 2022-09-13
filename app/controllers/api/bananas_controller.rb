class Api::BananasController < ApplicationController
    before_action :require_logged_in, only: [:create, :update]

    def index
        @bananas = Banana.all
        render :index
    end

    def create
        @banana = Banana.new(banana_params)

        if @banana.save!
          render :show
        else
            render json: { errors: @banana.errors.full_messages }, status: :unprocessable_entity

        end
    end

    def update
        @banana = Banana.find_by(id: params[:id])

        if @banana.update(banana_params)
            render json: {message: success}
        else
            render json: {error: "couldn't banana this banana"}, status: :unprocessable_entity
        end

    end

    def show
        @banana = Banana.find_by(id: params[:id])
        render :show
    end

    def destroy
        @banana = Banana.find_by(id: params[:id])
        if @banana
            @banana.destroy
            render :show
        else
            render json: {error: "could not find this banana"}
    end


    end

    def banana_params
        params.require(:banana).permit(:id, :bananable_type, :bananable_id, :created_at, :updated_at, :giver_id, :receiver_id, :post_id, :on)
    end

    def banana_update_params
        params.require(:banana).permit(:id, :on)
    end

end

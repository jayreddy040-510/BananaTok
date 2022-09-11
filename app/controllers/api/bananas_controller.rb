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
          render json: @banana.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @banana = Banana.find_by(id: params[:id])
        if @banana.update(banana_params)
            render :show
        else
            render json: {error: "couldn't banana this banana"}, status: :unprocessable_entity
        end

    end

    def show
        @banana = Banana.find_by(id: params[:id])
        render :show
    end

    def banana_params
        params.require(:banana).permit(:id, :bananable_type, :bananable_id, :created_at, :updated_at, :giver_id, :receiver_id, :post_id, :on)
    end

end

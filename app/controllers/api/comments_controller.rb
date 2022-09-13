class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :update, :create]


    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @comment = Commend.find_by(id: params[:id])
        if @comment.update(comment)
            render :show
        else
            render json: {error: "couldn't update this comment"}, status: :unprocessable_entity
        end
    end

    def destroy

        @comment = Comment.find_by(id: params[:id])
            if @comment
                @comment.destroy
                render :show
            else
                render json: {error: "could not find this comment"}
            end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
    end





    
    
    
    def comment_params
        params.require(:comment).permit(:giver_id, :post_id, :body)
    end
end

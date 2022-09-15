class Api::PostsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        
        if @post
            render :show
        else
            render json: {errors: "post not found!"}, status: 404
        end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: {errors: "can't create this post"}, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
       if @post.destroy
        render json: {message: "successfull destruction"}
       else
        render json: {message: "unsuccessful destruction"}
        end

    end

    def update
        # debugger
        @post = Pomment.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: {error: "couldn't update this post"}, status: :unprocessable_entity
        end
    end


    def post_params
        params.require(:post).permit(:caption, :topic, :author_id, :tags, :sound)
    end

end

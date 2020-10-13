class MemoriesController < ApplicationController
  before_action :set_memory, only: [:show, :update, :destroy]

  # GET /memories
  def index
    if params[:immortal_id]
      immortal = Immortal.find_by_id(params[:immortal_id])
      @memories = immortal.memories
    else
      @memories = Memory.all
    end
    render json: @memories, include: [:experiences]
  end

  # GET /memories/1
  def show
    render json: @memory
  end

  # POST /memories

  def create
    @memory = Memory.new(memory_params)

    if @memory.save
      render json:  @memory, include: [:experiences]
    else
      render json: {errors: @memory.errors, status: 500}
    end
  end


  # PATCH/PUT /memories/1
  def update
    if @memory.update(memory_params)
      render json: @memory, include: [:experiences]
    else
      puts @memory.errors.full_messages
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memories/1
  def destroy
    @memory.destroy
    render json: {message: 'successful deletion'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memory
      @memory = Memory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def memory_params
      params.require(:memory).permit(:immortal_id, :in_diary, :lost)
    end
end

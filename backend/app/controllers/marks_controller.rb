class MarksController < ApplicationController
  before_action :set_mark, only: [:show, :update, :destroy]

  # GET /marks
  def index
    if params[:immortal_id]
      immortal = Immortal.find_by_id(params[:immortal_id])
      @marks = immortal.marks
    else
    @marks = Mark.all
    end
    render json: @marks
  end

  # GET /marks/1
  def show
    render json: @mark
  end

  # POST /marks
  def create
    @mark = Mark.new(mark_params)
    if @mark.save
      render json: {mark: @mark, status: 200, location: @mark}
    else
      render json: {errors:  @mark.errors, status: 500}
    end
  end

  # PATCH/PUT /marks/1
  def update
    if @mark.update(mark_params)
      render json: @mark
    else
      render json: @mark.errors, status: :unprocessable_entity
    end
  end

  # DELETE /marks/1
  def destroy
    @mark.destroy
    render json: {message: 'successful deletion'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mark
      @mark = Mark.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mark_params
      params.require(:mark).permit(:name, :description, :immortal_id)
    end
end

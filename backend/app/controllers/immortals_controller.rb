class ImmortalsController < ApplicationController
  before_action :set_immortal, only: [:show, :update, :destroy]

  # GET /immortals
  def index
    @immortals = Immortal.all

    render json: @immortals
  end

  # GET /immortals/1
  def show
    render json: @immortal
  end

  # POST /immortals
  def create
    @immortal = Immortal.new(immortal_params)

    if @immortal.save
      render json: @immortal, status: :created, location: @immortal
    else
      render json: @immortal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /immortals/1
  def update
    if @immortal.update(immortal_params)
      render json: @immortal
    else
      render json: @immortal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /immortals/1
  def destroy
    @immortal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_immortal
      @immortal = Immortal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def immortal_params
      params.require(:immortal).permit(:name, :description)
    end
end

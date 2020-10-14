class ImmortalsController < ApplicationController
  before_action :set_immortal, only: [:show, :update, :destroy]

  # GET /immortals
  def index
    if params[:user_id]
    @user = User.find(params[:user_id])
    @immortals = @user.immortals
    else
      @immortals = Immortal.all
    end
    render json: {immortals: @immortals.sort_by{|e| e.name}, status: 200}
  end

  # GET/immortals/published

  def published
    immortals = Immortal.all
    @immortals = immortals.filter{|immortal| immortal.publish_journal == true}
    @journals = @immortals.map{|immortal| immortal.journals}
    render json: {
      immortals: @immortals,
      journals: @journals,
      status: 200}
  end

  # GET /immortals/1
  def show
    render json: {
      immortal: @immortal, 
      status: 200, 
      skills: @immortal.skills.sort_by{|e| e.name},
      characters: @immortal.characters.sort_by{|e| e.name}, 
      marks: @immortal.marks.sort_by{|e| e.name},
      memories: @immortal.memories.sort_by{|e| e.id},
      journals: @immortal.journals.sort_by{|e| e.id}
    } 
  end

  # POST /immortals
  def create

    @user = User.find(params[:user_id])
    @immortal = @user.immortals.build(immortal_params)
    if @immortal.save
      render json: @immortal, status: :created, location: @immortal
    else
      render json: {status: 500, errors: @immortal.errors.full_messages }
    end
  end

  # PATCH/PUT /immortals/1
  def update
    if @immortal.update(immortal_params)
      render json: {immortal: @immortal, status: 200, skills: @immortal.skills}
    else
      render json: @immortal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /immortals/1
  def destroy
    @immortal.destroy
    render json: {message: 'successful deletion'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_immortal
      @immortal = Immortal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def immortal_params
      params.require(:immortal).permit(:name, :description, :publish_journal)
    end
end

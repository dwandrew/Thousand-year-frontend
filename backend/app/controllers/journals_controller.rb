class JournalsController < ApplicationController
  before_action :set_journal, only: [:show, :update, :destroy]

  # GET /journals
  def index
    if params[:immortal_id]
      immortal = Immortal.find_by_id(params[:immortal_id])
      @journals = immortal.journals
    else
      @journals = Journal.all
    else
    render json: @journals
  end

  # GET /journals/1
  def show
    render json: @journal
  end

  # POST /journals
  def create
    @journal = Journal.new(journal_params)

    if @journal.save
      render json: {journal :@journal, status: 200, location: @journal}
    else
      render json: {errors: @journal.errors, status: 500}
    end
  end

  # PATCH/PUT /journals/1
  def update
    if @journal.update(journal_params)
      render json: @journal
    else
      render json: @journal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /journals/1
  def destroy
    @journal.destroy
    render json: {message: 'successful deletion'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_journal
      @journal = Journal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def journal_params
      params.require(:journal).permit(:immortal_id, :entry, :published)
    end
end

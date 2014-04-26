class ArabicNumbersController < ApplicationController
  def index
    @arabic_numbers = ArabicNumber.order("created_at DESC").page(params[:page]).per(10)
  end

  def new
    @arabic_number = ArabicNumber.new
  end

  def create
    @arabic_number = ArabicNumber.new(arabic_numbers_param)
    
    if @arabic_number.save
      flash[:notice] = "The number is successfully saved"
      redirect_to arabic_numbers_path
    else
      flash[:notice] = "The number can not be saved"
      render action: :new
    end
  end

  private

  def arabic_numbers_param
    params.require(:arabic_number).permit(:number_value)
  end
end

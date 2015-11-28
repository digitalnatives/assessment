class NumberToWordsController < ApplicationController


  def index
  end

  def create
    @num_param = num_param[:number].to_f.to_words
    render 'index'
  end

  def num_param
    params[:numbers]
  end

end

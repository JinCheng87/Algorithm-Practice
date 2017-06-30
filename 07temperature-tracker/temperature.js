function Temperature(){
  this.maxTemp = -1;
  this.minTemp = 112;
  this.tempSum = 0;
  this.tempCount = 0;
  this.tempArray = [];
  this.mostFreq = 0;
  this.mostFreqTemp = -1;
  for(let i = 0; i < 111; i++) {this.tempArray[i] = 0;}
}
Temperature.prototype.insertTemp = function(temp){
    if(temp > this.maxTemp) this.maxTemp = temp;
    if(temp < this.minTemp) this.minTemp = temp;
    this.tempSum += temp;
    this.tempCount ++;
    this.tempArray[temp]++;
    if (this.mostFreq < this.tempArray[temp]){
      this.mostFreq = this.tempArray[temp];
      this.mostFreqTemp = temp;
    }
};

Temperature.prototype.getMax =function(){
  return this.maxTemp;
};
Temperature.prototype.getMin = function(){
  return this.minTemp;
};
Temperature.prototype.getMean = function(){
  return Math.round(this.tempSum/this.tempCount);
};
Temperature.prototype.getMod = function(){
    return this.mostFreqTemp;
};

temp = new Temperature();
temp.insertTemp(10);
temp.insertTemp(20);
temp.insertTemp(20);
console.log(temp.getMax());
console.log(temp.getMin());
console.log(temp.getMean())
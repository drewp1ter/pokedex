String.prototype.toCapitalize = function()
{ 
   return this.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
}
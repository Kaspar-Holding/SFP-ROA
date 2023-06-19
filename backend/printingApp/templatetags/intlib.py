from django import template
register = template.Library()

@register.filter()
def to_int(value):
   return int(value)

@register.filter()
def subtract(value, arg):
   if value == "":
      value = 0
   if arg == "":
      arg = 0
   result = float(value) - float(arg)
   if (result).is_integer():
      return int(result)
   return result
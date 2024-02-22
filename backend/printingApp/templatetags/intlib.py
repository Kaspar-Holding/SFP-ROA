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


@register.filter()
def multiply(qty, unit_price, *args, **kwargs):
    # you would need to do any localization of the result here
    return qty * unit_price
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {month: 'short', year: 'numeric'}
  return date.toLocaleDateString('en-US', options)
}
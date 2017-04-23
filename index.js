module.exports = function noticeMe(dispatch){
	dispatch.hook('C_WHISPER', 1, (event) => {
		if (event.target === 'n') {
			dispatch.toServer('C_CHAT', 1, {
				channel: 21,
				message: event.message
			})
			return false
		}
	});
}
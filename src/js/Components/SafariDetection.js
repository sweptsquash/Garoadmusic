const isSafari = () => {
	const Safari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
	const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if(Safari || iOS) {
		return true;
	}

	return false;
};

export default isSafari;
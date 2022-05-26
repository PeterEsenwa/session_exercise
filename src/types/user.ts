interface UserOptions {
	name: string;
	isHandRaised?: boolean;
}

export class User {
	isHandRaised = false;
	name: string;

	constructor({name, isHandRaised = false}: UserOptions) {
		this.name = name;
		this.isHandRaised = isHandRaised;
	}

	get picture() {
		return `https://ui-avatars.com/api/?name=${this.name}`
	}

	toggleHand(isRaised?: boolean) {
		if (isRaised) {
			this.isHandRaised = isRaised
		} else {
			this.isHandRaised = !this.isHandRaised;
		}
	}
}

export class Moderator extends User {
	lowerUserHand(user: User) {
		user.toggleHand(false);
	}
}

const Desklet = imports.ui.desklet;
const St = imports.gi.St;

class DesktopHelper extends Desklet.Desklet {
	constructor(metadata, deskletId) {
		super(metadata, deskletId);

		this.label = new St.Label({
			text: "Hello from a desklet!"
		});

		this.setContent(this.label);
	}
}

function main(metadata, deskletId) {
    return new DesktopHelper(metadata, deskletId);
}
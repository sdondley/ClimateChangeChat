# On This Page

- [Synergy](#synergy)
- [Settings](#settings)
    - [advanced server settings](#advanced-server-settings)
    - [docs from website](#docs-from-website)

# Synergy

A virtual kvm device. Allows you to share mouse and keyboard across multiple computing devices that can be on different platforms (e.g. windows, mac, linux)

# Settings
## advanced server settings
* `Use relative mouse motion`
    * what does this do? 
    * doesn't seem to make a discernable difference
    * maybe internally the coordinates are relative to the screen you're in?
    * from the docs:
        * If set to true then secondary screens move the mouse using relative rather than absolute mouse moves when and only when the cursor is locked to the screen (by Scroll Lock or a configured hot key). This is intended to make Synergy work better with certain games. If set to false or not set then all mouse moves are absolute.

## docs from website
Options

args is a list of lines of the form name = value. These set the global options.

section: options
    heartbeat.        = 5000
    switchDelay.    = 500
end


List of options


heartbeat = N - The server will expect each client to send a message no less than every N milliseconds. If no message arrives from a client within 3N seconds the server forces that client to disconnect.If synergy fails to detect clients disconnecting while the server is sleeping or vice versa, try using this option.

switchCorners = <corners> - Synergy won't switch screens when the mouse reaches the edge of the screen if it's in a listed corner. The size of all corners is given by the switchCornerSize option.Corners are specified by a list using the following names:

none -- no corners
top-left -- the top left corner
top-right -- the top right corner
bottom-left -- the bottom left corner
bottom-right -- the bottom right corner
left -- top and bottom left corners
right -- top and bottom right corners
top -- left and right top corners
bottom -- left and right bottom corners
all -- all corners

The first name in the list is one of the above names and defines the initial set of corners. Subsequent names are prefixed with + or - to add the corner to or remove the corner from the set, respectively. For example: all -left +top-left starts will all corners, removes the left corners (top and bottom) then adds the top-left back in, resulting in the top-left, bottom-left and bottom-right corners.


switchCornerSize = N - Sets the size of all corners in pixels. The cursor must be within N pixels of the corner to be considered to be in the corner.

switchDelay = N - Synergy won't switch screens when the mouse reaches the edge of a screen unless it stays on the edge for N milliseconds. This helps prevent unintentional switching when working near the edge of a screen.

switchDoubleTap = N - Synergy won't switch screens when the mouse reaches the edge of a screen unless it's moved away from the edge and then back to the edge within N milliseconds. With the option you have to quickly tap the edge twice to switch. This helps prevent unintentional switching when working near the edge of a screen.

screenSaverSync = {true|false} - If set to false then Synergy won't synchronize screen savers. Client screen savers will start according to their individual configurations. The server screen saver won't start if there is input, even if that input is directed toward a client screen.

relativeMouseMoves = {true|false} - If set to true then secondary screens move the mouse using relative rather than absolute mouse moves when and only when the cursor is locked to the screen (by Scroll Lock or a configured hot key). This is intended to make Synergy work better with certain games. If set to false or not set then all mouse moves are absolute.

clipboardSharing = {true|false} - If set to true then clipboard sharing will be enabled and the clipboardSharingSize setting will be used. If set to false, then clipboard sharing will be disabled and the the clipboardSharingSize setting will be ignored.

clipboardSharingSize = N - Synergy will send a maximum of N kilobytes of clipboard data to another computer when the mouse transitions to that computer.

win32KeepForeground = {true|false} - If set to true (the default), Synergy will grab the foreground focus on a Windows server (thereby putting all other windows in the background) upon switching to a client. If set to false, it will leave the currently foreground window in the foreground. Synergy grabs the focus to avoid issues with other apps interfering with Synergy's ability to read the hardware inputs.

keystroke(key) = actions - key combination key to the given actions. key is an optional list of modifiers (shift, control, alt, meta or super) optionally followed by a character or a key name, all separated by + (plus signs). You must have either modifiers or a character/key name or both. See below for valid key names and actions.Keyboard hot keys are handled while the cursor is on the primary screen and secondary screens. Separate actions can be assigned to press and release.

mousebutton(button) = actions - Binds the modifier and mouse button combination button to the given actions. button is an optional list of modifiers (shift, control, alt, meta or super) followed by a button number. The primary button (the left button for right handed users) is button 1, the middle button is 2, etc. Actions can be found below.
Mouse button actions are not handled while the cursor is on the primary screen. You cannot use these to perform an action while on the primary screen. Separate actions can be assigned to press and release.

You can use both the switchDelay and switchDoubleTap options at the same time. Synergy will switch when either requirement is satisfied.


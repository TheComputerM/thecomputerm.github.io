package main

import (
	"syscall/js"

	"github.com/charmbracelet/glamour"
)

var r, _ = glamour.NewTermRenderer(
	glamour.WithAutoStyle(),
)

func renderWrapper() js.Func {
	wrapper := js.FuncOf(func(this js.Value, args []js.Value) any {
		if len(args) != 1 {
			return "invalid no. of args"
		}
		output, err := r.Render(args[0].String())
		if err != nil {
			return err.Error()
		}
		return output
	})
	return wrapper
}

func main() {
	js.Global().Set("renderMD", renderWrapper())
	<-make(chan struct{})
}

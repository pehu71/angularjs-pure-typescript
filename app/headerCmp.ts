export class headerCmp implements ng.IComponentOptions {

    template: string;

    constructor () {
        this.template = `
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a>ahoj</a></li>
                </ul>
                </div>
            </div>
        </nav>
`;
    }
}

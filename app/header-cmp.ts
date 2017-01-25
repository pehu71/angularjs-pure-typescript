export class HeaderComponent implements ng.IComponentOptions {

    template: string;

    constructor () {
        this.template = `
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a ng-href="#!/">Home</a></li>
                    <li><a ng-href="#!/books">Books</a></li>
                </ul>
                </div>
            </div>
        </nav>
`;
    }
}


var SelectButton = require('./buttonFilters').SelectButton;
var DownloadButton = require('./buttonFilters').DownloadButton;
var ConditionalSelectButton = require('./buttonFilters').ConditionalSelectButton;
var ApiButton = require('./buttonFilters').ApiButton;
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;

FilterFactory = function(type) {

    if (typeof FilterFactory[type] != 'function'){
        throw new Error(type + ' is not a valid filter.');
    }

    return FilterFactory[type];
};

FilterFactory.SelectButton = SelectButton;
FilterFactory.ConditionalSelectButton = ConditionalSelectButton;
FilterFactory.ApiButton = ApiButton;
FilterFactory.DownloadButton = DownloadButton;

const Filter = React.createClass({
    getDefaultProps: function() {
        return {
            type: React.PropTypes.string.isRequired,
            options: React.PropTypes.object,
            dynamic: false,
            onChange: React.PropTypes.func
        };
    },
    render: function(){
        var Z = FilterFactory(this.props.type);
        return (
            <Z ref={"filter"}
                dynamic={this.props.dynamic}
                onChange={this.props.onChange}
                options={this.props.options} />
        );
    }
});


module.exports.Filter = Filter;
